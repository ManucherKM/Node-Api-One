export default app => {
    app.get('/', (request, response) => {
        const users = [{
            id: 1,
            name: "Richard Hendricks",
            email: "richard@piedpiper.com",
        },
        {
            id: 2,
            name: "Bertram Gilfoyle",
            email: "gilfoyle@piedpiper.com",
        },
        ];
        response.send({
            users
        }
        );
    });
}