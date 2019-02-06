const request = require('request-promise-native');
const moment = require('moment');

const apiPath = 'http://5bbf0e9b72de1d0013253709.mockapi.io/api/v1';

const getPeople = async () => {
  try {
    const legacyPeople = await request.get({ url: `${apiPath}/PersoneLegacy`, json: true });
    let people = await request.get({ url: `${apiPath}/people`, json: true });

    const legacyPersonToNewPerson = legacyPerson => (
      {
        id: legacyPerson.id,
        createdAt: legacyPerson.Creato,
        firstName: legacyPerson.Nome,
        lastName: legacyPerson.Cognome,
        fullName: `${legacyPerson.Nome} ${legacyPerson.Cognome}`,
        jobTitle: legacyPerson.Mansione,
        departmentId: legacyPerson.Matricola,
        teamName: legacyPerson.NomeDelTeam,
      }
    );

    const convertedLegacyPeople = legacyPeople.map(lP => legacyPersonToNewPerson(lP));

    people = people.map(p => {
      const legacyPerson = convertedLegacyPeople.find(clP => clP.departmentId === p.departmentId);

      if (legacyPerson) {
        p.hasTeam = true;
        p.teamName = legacyPerson.teamName || null;
      }

      return p;
    });

    return people;
  } catch (error) {
    console.error(error)
  }

}

const printPerson = ({ fullName, createdAt, jobTitle, teamName }) => console.log(`${fullName} @ ${createdAt} | ${jobTitle} -> ${teamName}\n`);

async function main() {
  let people = await getPeople();

  people = people.filter(p => p.hasTeam && p.teamName).sort((p1, p2) => moment(p1.createdAt) - moment(p2.createdAt));
  people.map(p => printPerson(p));
}

main();