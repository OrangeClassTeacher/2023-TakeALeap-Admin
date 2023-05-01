import { FormEvent, useState } from "react"
import { ContactForm } from "./steps/Contact"
import { AddressForm } from "./steps/Address"
import { useMultistepForm } from "./steps/useMultistepForm"
import { UserForm } from "./steps/User"
import { OtherForm } from "./steps/Other"

type FormData = {
    restaurantName: string
    address?: {
        district?: string
        street?: string
        building?: string
        address?: string
        location?: {
            type: string
            coordinates: number[]
        }
    }
    restaurantRate?: [
        {
            rateType: string
            userId: string
            score: number
            comment: string
        }
    ]
    cuisineType?: string[]
    contact: {
        phone: number
        facebook?: string
        Instagram?: string
        link?: string
    }
    email: string
    password: string
    img?: string[]
    logoImg?: string
    schedule?: {
        weekday: { open: number, close: number }
        weekend: { open: number, close: number }
    };
    description?: string
}

const INITIAL_DATA: FormData = {
    restaurantName: "",
    address: {
        district: "",
        street: "",
        building: "",
        address: "",
        location: {
            type: "",
            coordinates: [0, 0]
        }
    },
    restaurantRate: [
        {
            rateType: "",
            userId: "",
            score: 0,
            comment: ""
        }
    ],
    cuisineType: [""],
    contact: {
        phone: 0,
        facebook: "",
        Instagram: "",
        link: ""
    },
    email: "",
    password: "",
    img: [""],
    logoImg: "",
    schedule: {
        weekday: { open: 0, close: 0 },
        weekend: { open: 0, close: 0 }
    },
    description: ""
}

function ProfileEdit() {
    const [data, setData] = useState(INITIAL_DATA)
    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }
    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <UserForm {...data} updateFields={updateFields} />,
            <AddressForm {...data} updateFields={updateFields} />,
            <ContactForm {...data} updateFields={updateFields} />,
            <OtherForm {...data} updateFields={updateFields} />,
        ])

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        if (!isLastStep) return next()
        alert("Profile successfully edited.")
    }

    return (
        <div
            className='bg-white border rounded-lg w-6/6 h-full gap-5 m-5 p-5'
        >
            <form onSubmit={onSubmit}>
                <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
                    {currentStepIndex + 1} / {steps.length}
                </div>
                {step}
                <div
                    style={{
                        marginTop: "1rem",
                        display: "flex",
                        gap: ".5rem",
                        justifyContent: "flex-end",
                    }}
                >
                    {!isFirstStep && (
                        <button className="bg-neutral-300 p-2 rounded-lg" type="button" onClick={back}>
                            Back
                        </button>
                    )}
                    <button className={isLastStep ? 'bg-green-400 p-2 rounded-lg' : 'bg-orange-300 p-2 rounded-lg'} type="submit">{isLastStep ? "Finish" : "Next"}</button>
                </div>
            </form>
        </div>
    )
}

export default ProfileEdit


