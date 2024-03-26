import LandingForm from './components/LandingForm'

function Landing() {
  return (
    <div className="h-screen flex items-center justify-center bg-blue-gradient">
      <div
        className="bg-white w-[500px] border border-slate-400 pt-8 pb-12 px-8 space-y-6"
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-duration="500"
      >
        <div>
          <div className="font-semibold text-xl">Log In</div>
          <div className="text-sm">Please sign in with your credentials:</div>
        </div>

        <LandingForm />
      </div>
    </div>
  )
}

export default Landing
