const GITHUB_USER_CONTENT = "https://raw.githubusercontent.com/fss6/fabiosantos.xyx"

const prod = {
    url: {
        DISCIPLINES_JSON_URL: GITHUB_USER_CONTENT + '/master/public/data/unifbv/',
    }
};

const dev = {
    url: {
        DISCIPLINES_JSON_URL: '/data/unifbv/',
    }
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;