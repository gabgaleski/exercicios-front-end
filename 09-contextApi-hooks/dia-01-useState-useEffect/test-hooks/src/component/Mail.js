import { useState, useEffect } from 'react'

export default function Mail() {

    const [ mails, setMails ] = useState([
        {
            id: 1,
            title: "Primeiro Email",
            status: 0
          },
          {
            id: 2,
            title: "Segundo Email",
            status: 0
          },
          {
            id: 3,
            title: "Terceiro Email",
            status: 0
          }
    ])



    const changeStatus = (mailId, newState) => {
        const change = mails.map((mail) => {
            if(mail.id === mailId) {
                return {...mail, status: newState}
            }
            return mail
        })
        setMails(change)
    }


    const changeAll = (newStatus) => {
        const change = mails.map((mail) => {
            return {...mail, status: newStatus}
        })
        setMails(change)
    }



    useEffect(() => {
        if(mails.every((mail) => mail.status === 1)) {
            alert('Parabens, todos os seus emails foram lidos')
        }
    }, [mails])

    return(
        <div>
         <h1>Mail</h1>
         <button onClick={() => changeAll(1)}>Marcar todas Como Lida</button>
         <button onClick={() => changeAll(0)} >Marcar todas como nao Lida</button>
         {mails.map((mail) => (
            <div key={mail.id}>
            <h3 className={mail.status === 0 ? 'unread' : 'read'}>{mail.title}</h3>
            <button onClick={() => changeStatus(mail.id, 1)}>Lido</button>
            <button onClick={() => changeStatus(mail.id, 0)} >Nao Lido</button>
            </div>
         ))}

        </div>
    )
}