# Transição entre páginas

Utilizando react-spring e react-router-dom, é possível fazer essa bela animação entre páginas na sua aplicação.

## Como implementar essa transição:

#### 1. Crie um componente que fará a transição

PageSlide.js
```js
import { Outlet, useLocation } from "react-router-dom"
import {useTransition, animated} from "react-spring" 

export default function PageSlide() {
    const location = useLocation()
    const transitions = useTransition(location.pathname, {
        from : {opacity : 0, transform : 'translate(100%, 0)'},
        enter : {opacity : 1, transform : 'translate(0%, 0)'},
        leave : {opacity : 0, transform : 'translate(-90%, 0)', position : 'absolute'},
    })
    return transitions((style) => (
        <animated.div style={style}> <Outlet /> </animated.div>
    ))
}
```
Você pode mudar os valores de opacidade, mudar o tipo de transform e o que for preciso para deixar do seu jeito!

#### 2. Crie as rotas da sua aplicação

App.js
```js
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Page1 />}/>
      <Route path='/route2' element={<Page2 />}/>
      <Route path='/route3' element={<Page3 />}/>
    </Routes>
</BrowserRouter>
```

#### 3. Crie uma rota pai que renderiza a animação, e envolva as rotas nele

App.js
```js
<BrowserRouter>
    <Routes>
      <Route element={<PageSlide />}>
        <Route path='/' element={<Page1 />}/>
        <Route path='/route2' element={<Page2 />}/>
        <Route path='/route3' element={<Page3 />}/>
      </Route>
    </Routes>
</BrowserRouter>
```

Pronto! Dentro do PageSlide estamos retornando uma div animada, e dentro dessa div temos <Outlet />, um componente do react-router-dom v6 que retorna todas as rotas filhas dessa rota.

Obs: Você pode ver um exemplo melhor dessa animação no meu repositório "market"!
