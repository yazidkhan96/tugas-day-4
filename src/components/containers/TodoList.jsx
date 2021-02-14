import { useState } from 'react';
const TodoList = () => {
    const [todo, setTodos] = useState(["membaca buku", "menulis", "menembak"])
    const [task, setTask] = useState("")
    const [isEdit, setIsEdit] = useState(false);
    const [todoId, setTodoId] = useState(0);

    return (
        <>
            <div className="container">
                <h1>Todo List</h1>
                <div className="input-group mb-3 w-50 shadow m-auto">
                    <input type="text" name="" className="form-control" value={task} onChange={(e) => { setTask(e.target.value) }} />
                    {isEdit > 0 ? (<button className="btn btn-success"
                        onClick={() => {
                            setTodos((prev) => {
                                let newData = [...prev];
                                newData.splice(todoId, 1, task);
                                return newData;
                            });
                            setTodoId(0);
                            setTask("");
                        }}
                    >
                        {console.log("todoIdx", todoId)}
              Update
                    </button>
                    ) : (
                            <button className="btn btn-primary"
                                disabled={!task}
                                onClick={() => {
                                    setTodos((prev) => [...prev, ...[task]]);
                                    setTask("");
                                }}>
                                Create
                            </button>
                        )}
                    {/* <button
                    onClick={() => {
                        setTodos((prev) => {
                            // isi dari newdata adalah isi dari todo tersebut dan isi dari prev juga merupakan isi dari todo tersebut
                            const newData = [...prev];
                            // di jaavascript kita harus mencopy data lama terlebib dahulu, dikarenakan di js kita gabole langsung menggunakan data lama nya , karena bukan lah best pratice nya
                            newData.push(task);
                            // task berisi value yg di dapat dari inputan dari setTask
                            return newData;
                        });
                        setTask("");
                    }}>Create</button> */}
                </div>

                {todo.map((data, i) => {
                    return (

                        <div key={i}>
                            <div className="card shadow mt-3  w-25 mx-auto">
                                <div className="card-body">
                                    <h5 className="card-title">Pekerjaan ke {i + 1}</h5>
                                    <p className="card-text">{data}</p>
                                    <button className="btn btn-success m-1" onClick={() => {
                                        setIsEdit(true);
                                        setTask(data);
                                        setTodoId(i);
                                    }}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => {
                                        setTodos((todo) => {
                                            const newData = [...todo];
                                            //(index,dan banyak data)
                                            // (i,1)
                                            newData.splice(i, 1);
                                            return newData;
                                        })
                                    }}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default TodoList;