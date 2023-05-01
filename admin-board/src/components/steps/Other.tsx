import { FormWrapper } from "./FormWrapper"

type OtherData = {
    weekdayOpen: number
    weekdayClose: number
    weekendOpen: number
    weekendClose: number
}

type OtherFormProps = OtherData & {
    updateFields: (fields: Partial<OtherData>) => void
}

export function OtherForm({
    weekdayOpen,
    weekdayClose,
    weekendOpen,
    weekendClose,
    updateFields,
}: OtherFormProps) {
    return (
        <FormWrapper title="User Details">
            <div className="flex flex-col">
                <div className="flex flex-row justify-between gap-10">
                    <label>Weekday opens: </label>
                    <input
                        autoFocus
                        required
                        type="number"
                        value={weekdayOpen}
                        className="border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                        onChange={e => updateFields({ weekdayOpen: e.target.value })}
                    />
                </div>
                <div className="flex flex-row justify-between gap-10">

                    <label>Weekday closes: </label>
                    <input
                        required
                        type="number"
                        value={weekdayClose}
                        className="border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                        onChange={e => updateFields({ weekdayClose: e.target.value })}
                    />
                </div>

                <div className="flex flex-row justify-between gap-10">

                    <label>Weekend opens: </label>
                    <input
                        required
                        min={1}
                        type="number"
                        value={weekendOpen}
                        className="border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                        onChange={e => updateFields({ weekendOpen: e.target.value })}
                    />
                </div>

                <div className="flex flex-row justify-between gap-10">

                    <label>Weekend closes: </label>
                    <input
                        multiple
                        required
                        min={1}
                        type="number"
                        value={weekendClose}
                        className="border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                        onChange={e => updateFields({ weekendClose: e.target.value })}
                    />
                </div>
            </div>
        </FormWrapper>
    )
}
