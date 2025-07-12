import Checkbox from '@/Components/Checkbox'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'

import { Link, useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'

export default function Login({ status, canResetPassword } : { status?: string; canResetPassword: boolean;}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false as boolean
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
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
                                <InputLabel htmlFor="email" value="Correo electrónico" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    placeholder="Correo electrónico"
                                    className="mt-1 block w-full text-sm"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="space-y-1">
                                <InputLabel htmlFor="password" value="Contraseña" />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    placeholder="Contraseña"
                                    className="mt-1 block w-full text-sm"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>
                        </div>

                        <hr className="my-6 border-gray-200" />

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />

                                <span className="ml-2 text-sm text-gray-600">
                                    Recuérdame
                                </span>
                            </label>

                            {canResetPassword && (
                                <Link href={route('password.request')} className="text-sm text-indigo-600 hover:text-indigo-800">
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            )}
                        </div>

                        <div>
                            <button type="submit" disabled={processing} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Iniciar sesión
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    );
}
