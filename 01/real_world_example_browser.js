const apiPath = 'https://5bbf0e9b72de1d0013253709.mockapi.io/api/v1';

const getPeople = async () => {
    let legacyPeople = [];
    let localPeople = [];

    try {
        const newPResponse = await fetch(`${apiPath}/people`);
        const legacyPResponse = await fetch(`${apiPath}/PersoneLegacy`);

        localPeople = await newPResponse.json();
        legacyPeople = await legacyPResponse.json();
    } catch (e){
        console.log(e)
    } finally {
      return { localPeople, legacyPeople }
    }
};

const printPerson = ({ fullName, createdAt, jobTitle, teamName }) => console.log(`${fullName} @ ${createdAt} | ${jobTitle} -> ${teamName}\n`);

const mergeData = ({ legacyPeople, people }) => {

  const legacyPersonToNewPersonMap = {
    id: 'id',
    Creato: 'createdAt',
    Nome: 'firstName',
    Cognome: 'lastName',
    Mansione: 'jobTitle',
    Matricola: 'departmentId',
    NomeDelTeam: 'teamName',
  };

  const convertedLegacyPeople = legacyPeople.map(lP => {
    const newP = Object.keys(lP).reduce((acc, prop) => (
      legacyPersonToNewPersonMap[prop] ? { [legacyPersonToNewPersonMap[prop]]: lP[prop], ...acc } : { [prop] : lP[prop], ...acc }
    ), {});

    newP.fullName = `${newP.firstName} ${newP.lastName}`;

    return newP;
  });

  people = people.map(p => {
    const legacyPerson = convertedLegacyPeople.find(clP => clP.departmentId === p.departmentId);

    if (legacyPerson) {
      p.hasTeam = true;
      p.teamName = legacyPerson.teamName || null;
    }

    return p;
  });

  return people;
};

async function main() {
  let people = await mergeData(await getPeople());

  people = people.filter(p => p.hasTeam).sort((p1, p2) => Date.parse(p1.createdAt) - Date.parse(p2.createdAt));
  people.map(p => printPerson(p));
}

main();
