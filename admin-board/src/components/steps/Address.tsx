import { FormWrapper } from "./FormWrapper"

type AddressData = {
  district: string
  street: string
  building: string
  address: string
  lat: number
  long: number
  // lat long-r utgaa awj zaschaad tsaashaa base ruugee put-r ywuulahda locationii coordinates ruugee pushleed ogno.
  // tgwl front dre utga awj zasahd asuudal garahgue

}

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}

export function AddressForm({
  district,
  street,
  building,
  address,
  lat,
  long,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <div className="flex flex-col justify-center">
        <div className="flex flex-row gap-24">
          <label>District: </label>
          <input
            autoFocus
            required
            type="text"
            value={district}
            className="border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
            onChange={e => updateFields({ district: e.target.value })}
          />
        </div>
        <div className="flex flex-row gap-24">
          <label>Street: </label>
          <input
            required
            type="text"
            value={street}
            className="border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
            onChange={e => updateFields({ street: e.target.value })}
          />

        </div>
        <div className="flex flex-row gap-24">
          <label>Building: </label>
          <input
            required
            type="text"
            value={building}
            className="border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
            onChange={e => updateFields({ building: e.target.value })}
          />

        </div>
        <div className="flex flex-row gap-24">
          <label>Detailed address: </label>
          <input
            required
            type="text"
            value={address}
            className="border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
            onChange={e => updateFields({ address: e.target.value })}
          />

        </div>
        <div className="flex flex-row gap-24">

          <label>Lat: </label>
          <input
            required
            type="number"
            value={lat}
            className="border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
            onChange={e => updateFields({ lat: e.target.value })}
          />
        </div>
        <div className="flex flex-row gap-24">

          <label>Long: </label>
          <input
            required
            type="number"
            value={long}
            className="border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
            onChange={e => updateFields({ long: e.target.value })}
          />
        </div>
      </div>
    </FormWrapper>
  )
}
