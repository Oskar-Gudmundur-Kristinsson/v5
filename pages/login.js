import Link from "next/Link"
import Input from "../components/Input"
import Button from "../components/Button"
import { useRouter } from "next/router"

export default function login({ login }) {
    return (
        <div>
            <h2>login</h2>
            <Input label="Username" name="username" />
            <Input label="Password" name="password" />
            <Button>Innskrá</Button>
    
            <p><Link href="/">back</Link></p>
        </div>
    )
}

