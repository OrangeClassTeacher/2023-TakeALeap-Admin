import { FormWrapper } from "./FormWrapper"

type AccountData = {
  phone: string
  email: string
  facebook: string
  instagram: string
  link: string
}

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}

export function ContactForm({
  phone,
  email,
  facebook,
  instagram,
  link,
  updateFields,
}: AccountFormProps) {
  return (
    <FormWrapper title="Account Creation">
      <div className="flex flex-col">
        <div className="flex flex-row gap-10 justify-between">

          <label>Phone: </label>
          <input
            autoFocus
            required
            type="number"
            value={phone}
            onChange={e => updateFields({ phone: e.target.value })}
          />
        </div>
        <div className="flex flex-row gap-10 justify-between">

          <label>Email: </label>
          <input
            required
            type="email"
            value={email}
            onChange={e => updateFields({ email: e.target.value })}
          />
        </div>
        <div className="flex flex-row gap-10 justify-between">

          <label>Facebook: </label>
          <input
            required
            type="text"
            value={facebook}
            onChange={e => updateFields({ facebook: e.target.value })}
          />
        </div>
        <div className="flex flex-row gap-10 justify-between">

          <label>Instagram: </label>
          <input
            required
            type="text"
            value={instagram}
            onChange={e => updateFields({ instagram: e.target.value })}
          />
        </div>
        <div className="flex flex-row gap-10 justify-between">

          <label>Restaurant page: </label>
          <input
            required
            type="text"
            value={link}
            onChange={e => updateFields({ link: e.target.value })}
          />
        </div>
      </div>
    </FormWrapper>
  )
}
