import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Library from "../screens/library/library";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Library">
                <Library/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews