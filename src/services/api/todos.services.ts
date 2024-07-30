import {axios} from '.';

class ToDosService {
  async getTodos() {
    return axios.get('/todos/');
  }

  async fetchTodos(description: string) {
    return axios.post('/todos/', {description});
  }

  async editToDo({
    id,
    description,
    done,
  }: {
    id: number;
    description: string;
    done: boolean;
  }) {
    await axios.put(`/todos/${id}`, {description, done});
  }

  async deleteToDos(id: number) {
    await axios.delete(`/todos/${id}`);
  }
}

export default new ToDosService();
