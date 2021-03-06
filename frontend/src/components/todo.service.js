class TodoService {

    constructor() {
        this.url = '/api/todo';
        this.contentType = 'Content-Type';
        this.appJson = 'application/json';
        this.methodPost = 'POST';
        this.methodDelete = 'DELETE';
        this.methodPut = 'PUT';
    }

    create(todo) {
        let headers = new Headers();
        headers.append(this.contentType, this.appJson);

        fetch(this.url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              "task" : todo.task,
              "createdAt" : todo.createdAt
            }),
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            ChromeSamples.log('Created Todo:', data);
        });
    }

    get() {
        const promise = fetch(this.url)
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(err => console.log(err));
        return promise;
    }

    delete(id) {
        const promise = fetch(`${this.url}/${id}`, { method: this.methodDelete })
            .then(res => res.json())
            .then(response => {
                return response
            })
            .catch(error => console.error('Error:', error));
        return promise;
    }

    update(todo) {

        let headers = new Headers();
        headers.append(this.contentType, this.appJson);

        const promise = fetch(`${this.url}/update/${todo._id}`, {
            method: 'PATCH',
            body: JSON.stringify(todo),
            headers: headers
        })
            .then(res => res.json())
            .catch(error => console.error('Error:', error));
        return promise;
    }
}

export default TodoService;