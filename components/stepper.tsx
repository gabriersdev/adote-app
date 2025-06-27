import React from 'react';

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({steps, currentStep}) => {
  // Calcula a porcentagem de progresso da barra azul.
  // A lógica é baseada no número de "intervalos" entre as etapas.
  const progressPercentage =
    currentStep > 0 ? (currentStep / (steps.length - 1)) * 100 : 0;

  return (
    <div className="w-full px-4 sm:px-8">
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-300 transform -translate-y-1/2" style={{top: 'calc(1.75rem + 8px)'}}/>

          <div
            className="absolute left-0 top-1/2 h-0.5 bg-blue-500 transform -translate-y-1/2 transition-all duration-500 ease-in-out"
            style={{width: `${progressPercentage}%`, top: 'calc(1.75rem + 8px)'}}
          />
        </div>

        <div className="flex justify-between items-start">
          {steps.map((label, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;

            return (
              <div key={index} className="relative flex flex-col items-center text-center flex-1 z-10">
                <p
                  className={`
                    txt-sm font-medium h-10 line-clamp-1 mb-0
                    ${isActive ? 'text-blue-600' : ''}
                    ${isCompleted ? 'text-gray-800' : 'text-gray-400'}
                  `}
                >
                  {label}
                </p>

                <div className={`absolute top-[60%] w-2 h-2 mt-2 rounded-0 transition-all duration-300 ${isActive ? 'bg-blue-600 scale-110' : ''} ${isCompleted ? 'bg-blue-500' : 'bg-gray-300'}                  `}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stepper;