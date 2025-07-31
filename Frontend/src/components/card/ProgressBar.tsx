

interface ProgressBarProps {
  percent: number; // Progresso da tarefa em porcentagem (0 a 100)
}

function ProgressBar({percent}: ProgressBarProps) {

    return (
        
        <div className="w-full bg-gray-200 rounded-full h-3.5">
            <div
                className="bg-gray-600 h-3.5 rounded-full transition-all duration-300"
                style={{ width: `${percent}%` 
            }} // Define a largura com base no progresso
            >
            </div>
        </div>


   );

}


export default ProgressBar;