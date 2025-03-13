To get the API up and running:

**You will need Postgres installed to run this API. If you don't have it, feel free to install it but I wouldn't stress about getting this API up and running locally. We use it for a few videos in this section and then never use it again.**

- Install required packages with `npm install`
- Set up the database. Run the jobly.sql file in postgres using `psql -f jobly.sql`
- Hit enter to confirm after prompted
- Run `npm start` to start up the server. You can change the port it's served on in the config.js file. **It defaults to port 3001.**
