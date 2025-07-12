import { House, Users, School, UserPlus, ListChecks } from 'lucide-react'

export const sidebar = [
	{ 
		name: 'Dashboard',
		href: route('dashboard'),
		icon: House,
		current: true
	},
	{ 
		name: 'Votantes',
		href: route('votantes'),
		icon: UserPlus,
		current: false
	},
	{ 
		name: 'Centros',
		href: route('centros'),
		icon: School,
		current: false
	},
	{ 
		name: 'Usuarios',
		href: route('usuarios'),
		icon: Users,
		current: false
	},
	{
		name: 'Roles',
		href: route('roles'),
		icon: ListChecks,
		current: false
	}
]