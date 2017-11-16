const PROXY_CONFIG = [
    {
        context: [
            "/read-file/fileName/largefile.txt/page/20",
            "/proxy"
        ],
        target: "http://localhost:8081",
        secure: false
    }
]

module.exports = PROXY_CONFIG;