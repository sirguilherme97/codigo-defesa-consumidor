import Logo from '../assets/Logo.gif'
export function Header() {

    return (
        <div className='w-screen px-12 gap-4 h-24 flex items-center justify-around'>
            <img
                src={Logo}
                className="w-16 h-16"
                alt=" Brasão da república, Logo do Site" />
            <div className='flex flex-col items-start justify-center'>
                <p className='text-xl sm:text-base font-bold text-rep'>Presidência da República - Casa Civil</p>
                <p className='text-lg sm:text-sm font-medium text-rep'>Subchefia para Assuntos Jurídicos</p>
            </div>
        </div>
    )
}
