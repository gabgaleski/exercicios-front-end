export const GET_PERSON = 'GET_PERSON';

export const personalAction = (infos) => ({
    type: GET_PERSON,
    infos: infos,
})

export const personalApi = (url) => {
    return async (dispatch) => {
      const getLinkUrl = `https://anapioficeandfire.com/api/characters?name=${url}`;
      const fetchApi = await fetch(getLinkUrl);
      const data = await fetchApi.json();
      dispatch(personalAction(...data))
    }
}