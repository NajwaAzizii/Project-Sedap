export default function PageHeader({ title, breadcrumb, children }) {
    const renderBreadcrumb = () => {
        if (typeof breadcrumb === "string") {
            return <span className="text-gray-500">{breadcrumb}</span>;
        }

        if (Array.isArray(breadcrumb)) {
            return breadcrumb.map((item, index) => (
                <span key={index} className="text-gray-500 flex items-center">
                    {item}
                    {index < breadcrumb.length - 1 && (
                        <span className="mx-1">/</span> 
                    )}
                </span>
            ));
        }

        return null; 
    };

    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
           
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">
                    {title}
                </span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-1 mt-2">
                    {renderBreadcrumb()}
                </div>
            </div>
            {/* Kanan */}
            <div id="action-button" className="flex flex-col items-end">
                {children}
                {(title === "Orders List" || title === "Customers List") && (
                    <p className="mt-2 text-sm text-gray-500 text-right max-w-xs">                      
                    </p>
                )}
            </div>
        </div>
     );
}