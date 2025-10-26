import useInput from "@/lib/hooks/input"
import { Dispatch, SetStateAction } from "react"

interface LoginProps {
    setIsLogin: Dispatch<SetStateAction<boolean>>
}

const Login = ({setIsLogin}:LoginProps) => {

  const id = useInput('')
  const pw = useInput('')

  const  onSubmit:React.FormEventHandler<HTMLFormElement> = async(e) => {
    e.preventDefault()

    if(id.inputValue == "1234" && pw.inputValue == "1234" ){
      setIsLogin(true)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid justify-center items-center">
        <p className="">Login</p>
        <input value={id.inputValue} onChange={id.onChange} type="text" />
        <input value={pw.inputValue} onChange={pw.onChange} type="password" />
        <button type="submit">login</button>
    </form>
  )
}

export default Login