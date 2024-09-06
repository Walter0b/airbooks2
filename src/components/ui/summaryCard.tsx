const SummaryCard = ({ title, value, subValue, color }: { title: string, value: string, subValue: string, color: string }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
            <p className={`text-3xl font-semibold ${color}`}>{value}</p>
            <p className="text-xs text-gray-400">{subValue}</p>
        </div>
    );
};

export default SummaryCard;
