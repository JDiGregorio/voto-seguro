import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function Dashboard() {
    return (
        <AuthenticatedLayout >
            <div className="py-2">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white border shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Dashboard content here.
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
