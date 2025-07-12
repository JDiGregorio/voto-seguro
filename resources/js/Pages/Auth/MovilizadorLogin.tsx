import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import { useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'

export default function Login({ status } : { status?: string; }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        dni: '',
        codigo_acceso: '',
        remember: false as boolean
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()

        post(route('movilizador.login.store'), {
            onFinish: () => reset('codigo_acceso')
        })
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow space-y-10">
                <h2 className="text-center text-2xl font-bold text-gray-900">
                    ¡Bienvenido de nuevo!
                </h2>

                {status && (
                    <div className="text-sm font-medium text-green-600 text-center">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <InputLabel htmlFor="dni" value="DNI" />

                            <TextInput
                                id="dni"
                                type="text"
                                name="dni"
                                value={data.dni}
                                placeholder="DNI"
                                className="mt-1 block w-full text-sm"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('dni', e.target.value)}
                            />
                            <InputError message={errors.dni} className="mt-2" />
                        </div>

                        <div className="space-y-1">
                            <InputLabel htmlFor="codigo_acceso" value="Código de acceso" />

                            <TextInput
                                id="codigo_acceso"
                                type="text"
                                name="codigo_acceso"
                                value={data.codigo_acceso}
                                placeholder="Código de acceso"
                                className="mt-1 block w-full text-sm"
                                autoComplete="current-password"
                                onChange={(e) => setData('codigo_acceso', e.target.value)}
                            />
                            <InputError message={errors.codigo_acceso} className="mt-2" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" disabled={processing} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Validar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
