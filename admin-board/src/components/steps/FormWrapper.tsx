import { ReactNode } from "react"

type FormWrapperProps = {
    title: string
    children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps): JSX.Element {
    return (
        <div className="bg-white border rounded-lg w-5/6 h-1/6 p-10 flex flex-col gap-5 m-6">
            <h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}>
                {title}
            </h2>
            <div
                style={{
                    display: "grid",
                    gap: "1rem .5rem",
                    justifyContent: "flex-start",
                    gridTemplateColumns: "auto minmax(auto, 400px)",
                }}
            >
                {children}
            </div>
        </div>
    )
}
