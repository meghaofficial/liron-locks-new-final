import { useNavigate } from "react-router-dom"
import lion from '../../assets/images/lion.png'

const Logo = ({ imgH = 6, textSize = 15, color='brand' }: { imgH?: number, textSize?: number, color?: string }) => {

  const navigate = useNavigate();

  return (
    <>
      <div className='flex items-center gap-2' onClick={() => navigate("/")}>
        <img src={lion} alt="lion" className={`h-${imgH}`} />
        <span className={`font-bold text-[${textSize}px] text-${color} roboto`}>Liron Locks</span>
      </div>
    </>
  )
}

export default Logo
