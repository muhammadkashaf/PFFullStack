import axios from 'axios';
import validator from 'validator';

const getProjects = async _ => {
    // Update the document title using the browser API
    try {
        let response = await axios.get('https://pffullstack.herokuapp.com/api/v1/projects');
        console.log(response.data.projects);
        return response.data.projects

    } catch (err) {
        console.log(err);
    }
}

const getSearchData = async object => {
    try {
        let response = await axios.get(`https://pffullstack.herokuapp.com/api/v1/projects/search?name?Anup${object}`);
        console.log(response.data.projects);
        return response.data.projects

    } catch (err) {
        console.log(err);
    }
}

const Value = (modelName, modelYear, modelLocation, modelSkill, setError) => {
    const Name = validator.isEmpty(modelName);
    const Year = validator.isEmpty(modelYear);
    const Location = validator.isEmpty(modelLocation);
    const Skill = validator.isEmpty(modelSkill);
    if (Name === true) {
        setError('Name')
    }
    else if (Year === true) {
        setError('Year')
    }
    else if (Location === true) {
        setError('Location')
    }
    else if (Skill === true) {
        setError('Skill')
    }
}

export {
    getProjects,
    getSearchData,
    Value
}