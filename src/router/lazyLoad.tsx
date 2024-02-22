import { Suspense } from "react"
import Spinner from "../components/spinner"

/**
 * 懒加载，减少文件体积，加快加载速度
 * 通过 <Suspense></Suspense> 和React.lazy()来实现
 * fallback可用于做加载中
 */
export default (Component: React.LazyExoticComponent<() => JSX.Element>) => {
    return (
        <Suspense fallback={<Spinner />}>
            <Component />
        </Suspense>
    )
}