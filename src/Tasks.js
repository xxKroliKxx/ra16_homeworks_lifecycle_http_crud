import Task from "./Task";

export default function Tasks({tasks, callBackFunc}) {
    return (
        <div className={'board'}>
            <div className={'tasks'}>
                {tasks.map(task => {
                        return <Task key={task.id}
                                     id={task.id}
                                     content={task.content}
                                     callBackFunc={callBackFunc}/>
                    }
                )}
            </div>
        </div>
    )
}