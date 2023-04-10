// FIXME This is horrible, this should be replaced with something less brittle as soon as possible

type CommonAttributes = {
    id?: string;
    class?: string;
    role?: string;
    style?: string;
    contenteditable?: boolean;

    lang?: 'ja';
    part?: string;

    onclick?: (event: MouseEvent) => void;
    onmousedown?: (event: MouseEvent) => void;
    onmouseup?: (event: MouseEvent) => void;
    onmouseenter?: (event: MouseEvent) => void;
    onmouseleave?: (event: MouseEvent) => void;

    onwheel?: (event: WheelEvent) => void;

    oninput?: (event: InputEvent) => void;
};
type AnyChildren = {
    children?: (string | Text | HTMLElement | (string | Text | HTMLElement)[])[];
};

type Regular = CommonAttributes & AnyChildren;

type AttributesForTag = {
    style: { [k: string]: never };

    span: Regular;
    small: Regular;

    ruby: Regular;
    rt: Regular;

    div: Regular;
    article: Regular;
    section: Regular;
    dialog: Regular;

    ol: Regular;
    li: Regular;

    template: Regular;

    a: {
        href: string;
        target?: '_self' | '_blank' | '_parent' | '_top';
    } & Regular;

    label: {
        for?: string;
    } & Regular;
    button: {
        name?: string;
        disabled?: boolean;
    } & Regular;
    input: {
        type: 'checkbox' | 'text' | 'number';
        name?: string;
        pattern?: string;
        disabled?: boolean;
        checked?: boolean;
    } & Regular;
    textarea: {
        name?: string;
        disabled?: boolean;
    } & Regular;

    slot: {
        name?: string;
    };
};

declare namespace JSX {
    type Element = HTMLElement;

    type IntrinsicElements = AttributesForTag;
}
