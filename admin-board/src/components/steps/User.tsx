import { FormWrapper } from "./FormWrapper"

type UserData = {
  restaurantName: string
  cuisineType: string
  logoImg: string
  img: string[]
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({
  restaurantName,
  cuisineType,
  logoImg,
  img,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between gap-10">
          <label>Restaurant name: </label>
          <input
            autoFocus
            required
            type="text"
            value={restaurantName}
            className="border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
            onChange={e => updateFields({ restaurantName: e.target.value })}
          />
        </div>
        <div className="flex flex-row justify-between gap-10">

          <label>Cuisine type: </label>
          <input
            required
            type="text"
            value={cuisineType}
            className="border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
            onChange={e => updateFields({ cuisineType: e.target.value })}
          />
        </div>

        <div className="flex flex-row justify-between gap-10">

          <label>Logo: </label>
          <input
            required
            min={1}
            type="file"
            value={logoImg}
            className="border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
            onChange={e => updateFields({ logoImg: e.target.value })}
          />
        </div>

        <div className="flex flex-row justify-between gap-10">

          <label>Images: </label>
          <input
            multiple
            required
            min={1}
            type="file"
            value={img}
            className="border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
            onChange={e => updateFields({ img: e.target.value })}
          />
        </div>
      </div>
    </FormWrapper>
  )
}
