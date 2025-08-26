import data from './data.json';

export default function fetchMock(url) {
    const mockData = data;

    return Promise.resolve({
        ok: true,
        status: 200,
        statusText: "OK",
        headers: new Headers({
            "content-type": "application/json"
        }),
        url,
        type: "cors",
        json: () => Promise.resolve(mockData)
    });
}