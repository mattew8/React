import './App.css';
import { useInput } from './hooks/useInput/useInput';

const App = () => {
    const maxLen = (value) => value.length <= 10;
    const name = useInput('initail', maxLen);

    return (
        <div className="App">
            <h1>Hello</h1>
            <input placeholder="Name" {...name} />
            {/* name.value가 아닌 ...name으로 적어줌으로서 name속 모든 요소 unpack! */}
        </div>
    );
};

export default App;
