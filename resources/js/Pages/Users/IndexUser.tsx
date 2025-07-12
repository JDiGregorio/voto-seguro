import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Link } from '@inertiajs/react'

export default function IndexUser() {
	const usuarios = [
		{ name: 'José Di Gregorio', username: 'jose', email: 'josedgregorio07@gmail.com', role: 'Administrador' },
		{ name: 'Courtney Henry', username: 'courtney', email: 'courtney.henry@example.com', role: 'Coordinador' },
		{ name: 'Tom Cook', username: 'tom', email: 'tom.cook@example.com', role: 'Coordinador' },
		{ name: 'Whitney Francis', username: 'whitney', email: 'whitney.francis@example.com', role: 'Coordinador' },
		{ name: 'Leonard Krasner', username: 'leonard', email: 'leonard.krasner@example.com', role: 'Coordinador' },
		{ name: 'Floyd Miles', username: 'floyd', email: 'floyd.miles@example.com', role: 'Coordinador' }
	]

	return (
		<AuthenticatedLayout >
			<div className="py-2">
				<div className="mx-auto max-w-8xl sm:px-6 lg:px-8 space-y-6">
					<h2 className="text-2xl font-semibold text-gray-900">
						Usuarios
					</h2>

					<div className="sm:flex sm:items-center">
						<div className="sm:flex-auto">
							<input
								id="search"
								name="search"
								type="search"
								placeholder="Buscar"
								className="peer block w-2/4 bg-gray-50 rounded px-3 py-1.5 text-gray-900 placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
							/>
						</div>
						<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
							<Link
								
								href={route('crear-votante')}
								className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Agregar Usuario
							</Link>
						</div>
					</div>

					<div className="overflow-hidden bg-white border shadow-sm sm:rounded-lg">
						<div className="p-6 text-gray-900">
							<div className="">									
								<div className="flow-root">
									<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
										<div className="inline-block min-w-full align-middle">
											<table className="min-w-full divide-y divide-gray-300">
												<thead>
													<tr>
														<th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8">
															Nombre
														</th>
														<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
															Teléfono
														</th>
														<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
															Centro
														</th>
														<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
															Rol
														</th>
														<th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-6 lg:pr-8">
															<span className="sr-only">
																Edit
															</span>
														</th>
													</tr>
												</thead>

												<tbody className="divide-y divide-gray-200 bg-white">
													{usuarios.map((person, index) => (
														<tr key={index}>
															<td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6 lg:pl-8">
																{person.name}
															</td>
															<td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
																{person.username}
															</td>
															<td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
																{person.email}
															</td>
															<td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
																{person.role}
															</td>
															<td className="relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-6 lg:pr-8">
																<a href={route('crear-votante')} className="text-indigo-600 hover:text-indigo-900">
																	Edit
																	<span className="sr-only">, {person.name}</span>
																</a>
															</td>
														</tr>
													))}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	)
}