import { FaXTwitter, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-700">
      <div className="flex justify-between">
        <div className="flex gap-5 p-6">
          <p className="text-xl text-white font-bold">Creater's SNS</p>
          <FaXTwitter size="40px" />
          <div>
            <p>hayatonanba@0228</p>
            <small>Web系アプリを作成する大学2年生です。若輩者故精進中</small>
          </div>
          <FaGithub size="40px" />
          <div>
            <p>hayato_nanba</p>
            <small>使用している技術スタック等はここからご覧ください</small>
          </div>
        </div>
      </div>
        <small className="text-white flex justify-center">Copyright 2024/hayatonanba</small>
    </div>
  )
}

export default Footer;