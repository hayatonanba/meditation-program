import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-500">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex gap-8 p-6">
            <p className="text-xl text-white font-bold">Creater's SNS</p>
            <Link to="https://x.com/hayatonanba0228"><FaXTwitter size="40px" /></Link>
            <div>
              <p>hayatonanba@0228</p>
              <small>Webアプリを作成する大学2年生です。<br /> 若輩者故精進中</small>
            </div>
            <Link to="https://github.com/hayatonanba"><FaGithub size="40px" /></Link>
            <div>
              <p>hayato_nanba</p>
              <small>使用している技術スタック等はこちらから <br />ご覧ください</small>
            </div>
            <Link to="/form"><Button>お問い合わせ</Button></Link>
            <Link to="/policy"><Button>プライバシーポリシー</Button></Link>
          </div>
        </div>
          <small className="text-white flex justify-center">Copyright 2024/hayatonanba</small>
      </div>
    </div>
  )
}

export default Footer;