const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'localhost',
    user: env.DB_USER || 'cesidocker',
    password: env.DB_PASSWORD || 'isec',
    database: env.DB_NAME || 'docker_pokemon',
  },
};


module.exports = config;