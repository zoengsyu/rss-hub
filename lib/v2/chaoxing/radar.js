module.exports = {
    'chaoxing.com': {
        _name: 'θΆζ',
        '.': [
            {
                title: 'ζε',
                docs: 'https://docs.rsshub.app/reading.html#chao-xing-qi-kan',
                source: ['/'],
                target: (params, url) => `/chaoxing/qk/${new URL(url).searchParams.get('mags')}`,
            },
        ],
    },
};
