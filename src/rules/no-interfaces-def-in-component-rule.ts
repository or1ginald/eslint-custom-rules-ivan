import { ESLintUtils } from "@typescript-eslint/utils";

export const noInterfacesDefInComponentRule = ESLintUtils.RuleCreator.withoutDocs({
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Запрещает создавать интерфейсы в .tsx файлах.',
            recommended: "recommended",
        },
        messages: {
        noDefineInterfaceInComponent: "Interfaces should not be defined in a react component file"
        },
        schema: [],
    },
    defaultOptions: [],

    create: function(context) {
        return {
            TSInterfaceDeclaration(node) {
                const fileName = context.filename;

                if (fileName.endsWith('.tsx')) {
                        context.report({
                            node,
                            messageId: "noDefineInterfaceInComponent",
                        });
                }
            },
        };
    },
});
