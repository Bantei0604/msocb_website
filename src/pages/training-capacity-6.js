import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import TrainingCapacityPic6 from "../images/training-capacity-6.jpg"

const TrainingCapacity6 = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold">
          Mock field training programme on inspection for Internal Control
          System-ICS group conducted by the team from MSOCB under the
          facilitation of Directorate of Horticulture, Government of Meghalaya
          which was held on the 12th March, 2024
        </h1>
        <StaticImage
          src="../images/training-capacity-6.jpg"
          alt="Training Capacity"
        />
        <p className="mt-4 text-base">
          The field inspection to an ICS group facilitated by the Directorate of
          Horticulture, Government of Meghalaya. The inspection was conducted on
          the 12th March 2024. The ICS group that was inspected was under the
          external audit from SGS Certification Body under which the group was
          registered.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default TrainingCapacity6
