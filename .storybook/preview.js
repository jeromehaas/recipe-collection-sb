// IMPORTS
import '@/stories/styles/main.scss';

// PREVIEW
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

// EXPORTS
export default preview;
