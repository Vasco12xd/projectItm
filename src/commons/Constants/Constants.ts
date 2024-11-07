export const CONSTANTS = {
    /* Formulario */
    FORM: {
        TITLE: "Buscador de Examenes",
        INPUT_FORM: "Codigo CUPS",
        LABEL_FORM: "CUPS",
        INPUT_FORM_2: "Codigo Laboratorio",
        LABEL_FORM_2: "Laboratorio",
        INPUT_FORM_3: "Nombre de la prueba",
        LABEL_FORM_3: "Prueba",
        SELECT_FORM: "Tipo de muestra",
        BUTTON_FORM: "Buscar",
        BUTTON_CARDS: "Leer más"
    },
}
/* Variables de entorno */
export const ENV_CONFIG = {
    ENVIRONMENT: process.env.REACT_APP_ENVIRONMENT || "",
    LOADER_SRC: process.env.REACT_APP_IMG_LOADER || "",
    MIDDLEWARE_URL: process.env.REACT_APP_MIDDLEWARE_URL || "",
    KEY_MIDDLEWARE_URL: process.env.REACT_APP_MIDDLEWARE_KEY || "",
    MF_EXAMENS_URL: process.env.REACT_APP_MF_EXAMENS_URL || "",
}
