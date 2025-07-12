
import React, { useState } from 'react'
import { useForm } from '@inertiajs/react'

import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import InputError from '@/Components/InputError'
import Checkbox from '@/Components/Checkbox'

export default function GuestVoter() {
	const [step, setStep] = useState(1);
	
	const { data, setData, post, processing, errors, reset } = useForm({
		dni: '',
		nombre: '',
		telefono: '',
		direccion: '',
		centro: '',
		estado_censo: '',
		tieneDni: false as boolean,
		movilizacion: false as boolean,
		detallesMovilizacion: '' 
	})

	const nextStep = () => setStep(prev => prev + 1)

	const prevStep = () => setStep(prev => prev - 1)

	const cancel = () => {} //Inertia.visit('/votantes')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		post(route('invitados.store'), {
			onFinish: () => reset('dni','nombre','telefono','direccion','centro','estado_censo','tieneDni','movilizacion','detallesMovilizacion'),

		})
	}

    return (
		<main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center justify-start min-h-screen bg-white px-4">
					<div className="py-2 w-full">
						<div className="mx-auto max-w-8xl sm:px-6 lg:px-8 space-y-6">
							<h2 className="text-2xl font-semibold text-gray-900">
								Invitados
							</h2>

							<div className="overflow-hidden bg-white border shadow-sm sm:rounded-lg">
								<div className="p-6 text-gray-900">
									<div className="max-w-2xl mx-auto py-8 px-4">
										<h2 className="text-xl font-semibold mb-6">
											Formulario de Ingreso
										</h2>

										<form onSubmit={handleSubmit} className="space-y-6">
											{/* Step 1 */}
											{step === 1 && (
												<>
													<div className="space-y-1">
														<InputLabel htmlFor="dni" value="DNI" />

														<TextInput
															id="dni"
															type="text"
															name="dni"
															value={data.dni}
															placeholder="0000-0000-00000"
															className="mt-1 block w-full text-sm"
															isFocused={true}
															onChange={(e) => setData('dni', e.target.value)}
														/>

														<InputError message={errors.dni} className="mt-2" />
													</div>

													<div className="flex justify-between">
														<button type="button" onClick={cancel} className="text-gray-600 hover:underline">
															Cancelar
														</button>

														<button type="button" onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded">
															Siguiente
														</button>
													</div>
												</>
											)}

											{/* Step 2 */}
											{step === 2 && (
												<>
													<div className="grid grid-cols-1 gap-4">
														<div className="space-y-1">
															<InputLabel htmlFor="nombre" value="Nombre" />

															<TextInput
																id="nombre"
																type="text"
																name="nombre"
																value={data.nombre}
																placeholder="Nombre"
																className="mt-1 block w-full text-sm"
																isFocused={true}
																onChange={(e) => setData('nombre', e.target.value)}
															/>

															<InputError message={errors.nombre} className="mt-2" />
														</div>

														<div className="space-y-1">
															<InputLabel htmlFor="telefono" value="Teléfono" />

															<TextInput
																id="telefono"
																type="text"
																name="telefono"
																value={data.telefono}
																placeholder="Teléfono"
																className="mt-1 block w-full text-sm"
																isFocused={true}
																onChange={(e) => setData('telefono', e.target.value)}
															/>

															<InputError message={errors.telefono} className="mt-2" />
														</div>

														<div className="space-y-1">
															<InputLabel htmlFor="direccion" value="Dirección" />

															<TextInput
																id="direccion"
																type="text"
																name="direccion"
																value={data.direccion}
																placeholder="Dirección"
																className="mt-1 block w-full text-sm"
																isFocused={true}
																onChange={(e) => setData('direccion', e.target.value)}
															/>

															<InputError message={errors.direccion} className="mt-2" />
														</div>

														<div className="space-y-1">
															<InputLabel htmlFor="centro" value="Centro de votación" />

															<TextInput
																id="centro"
																type="text"
																name="centro"
																value={data.centro}
																placeholder="Centro de votación"
																className="mt-1 block w-full text-sm"
																isFocused={true}
																onChange={(e) => setData('centro', e.target.value)}
															/>

															<InputError message={errors.centro} className="mt-2" />
														</div>

														<div className="space-y-1">
															<InputLabel htmlFor="estado_censo" value="Estado en Censo" />

															<TextInput
																id="estado_censo"
																type="text"
																name="estado_censo"
																value={data.estado_censo}
																placeholder="Estado en Censo"
																className="mt-1 block w-full text-sm"
																isFocused={true}
																onChange={(e) => setData('estado_censo', e.target.value)}
															/>

															<InputError message={errors.estado_censo} className="mt-2" />
														</div>
													</div>

													<div className="flex justify-between mt-6">
														<button type="button" onClick={cancel} className="text-gray-600 hover:underline">
															Cancelar
														</button>

														<div className="space-x-2">
															<button type="button" onClick={prevStep} className="px-4 py-2 border rounded">
																Anterior
															</button>

															<button type="button" onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded">
																Siguiente
															</button>
														</div>
													</div>
												</>
											)}

											{/* Step 3 */}
											{step === 3 && (
												<>
													<div className="space-y-4">
														<label className="flex items-center">
															<Checkbox
																name="tieneDni"
																checked={data.tieneDni}
																onChange={(e) => setData('tieneDni', e.target.checked)}
															/>
							
															<span className="ml-2 text-sm text-gray-600">
																¿Tiene DNI?
															</span>
														</label>
			
														<label className="flex items-center">
															<Checkbox
																name="movilizacion"
																checked={data.movilizacion}
																onChange={(e) => setData('movilizacion', e.target.checked)}
															/>
							
															<span className="ml-2 text-sm text-gray-600">
																¿Necesita movilización?
															</span>
														</label>

														{data.movilizacion && (
															<div className="space-y-1">
																<InputLabel htmlFor="detallesMovilizacion" value="Detalles de movilización" />
							
																<textarea
																	id="detallesMovilizacion"
																	name="detallesMovilizacion"
																	value={data.detallesMovilizacion}
																	onChange={(e) => setData('detallesMovilizacion', e.target.value)}
																	className="w-full border px-3 py-2 rounded"
																/>
															</div>
														)}
													</div>

													<div className="flex justify-between mt-6">
														<button type="button" onClick={cancel} className="text-gray-600 hover:underline">
															Cancelar
														</button>

														<div className="space-x-2">
															<button type="button" onClick={prevStep} className="px-4 py-2 border rounded">
																Atrás
															</button>

															<button type="submit" disabled={processing} className="bg-green-600 text-white px-4 py-2 rounded">
																Guardar
															</button>
														</div>
													</div>
												</>
											)}
										</form>
										</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}