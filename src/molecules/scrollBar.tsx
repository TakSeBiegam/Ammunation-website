// import React, { useState } from "react";
// import Scrollbar, { ScrollbarState } from "react-scrollbars-custom";

// type ScrollbarProps = {
//     value1: number;
//     value2: number;
//     onChange: (value1: number, value2: number) => void;
// };

// const CustomScrollbar: React.FC<ScrollbarProps> = ({
//     value1,
//     value2,
//     onChange,
// }) => {
//     const [currentValue1, setCurrentValue1] = useState(value1);
//     const [currentValue2, setCurrentValue2] = useState(value2);

//     const handleScroll = (values: { top: number; left: number; }) => {
//         setCurrentValue1(values.top);
//         setCurrentValue2(values.left);
//         onChange(values.top, values.left);
//     };

//     return (
//         <Scrollbar onScroll={handleScroll}>
//             <ul style={{ maxHeight: 400, overflowY: "auto" }}>
//                 {items.map((item) => (
//                     <li key={item.id}>{item.text}</li>
//                 ))}
//             </ul>
//         </Scrollbar>
//     );
// };

// export default CustomScrollbar;
