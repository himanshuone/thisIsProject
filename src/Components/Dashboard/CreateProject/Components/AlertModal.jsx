function AlertModal({ message, onClose }) {
    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
            <div className="bg-white relative z-10 w-full max-w-sm rounded-3xl p-8 text-center shadow-2xl">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">!</div>
                <h3 className="text-xl font-bold mb-2">Member Not Found</h3>
                <p className="text-gray-500 text-sm mb-6">{message}</p>
                <button
                    onClick={onClose}
                    className="w-full bg-black text-white py-3 rounded-2xl font-bold hover:bg-gray-800 transition-all"
                >
                    Got it
                </button>
            </div>
        </div>
    );
}
export default AlertModal;