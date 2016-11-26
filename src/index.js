export default function ({ types: t }) {

  const wrapVisitor = {

    ObjectExpression(path) {

      path.replaceWith(
        t.callExpression(t.identifier("Object.freeze"), [ path.node ])
      );

      path.stop();
    }
  };

  return {
    visitor: {
      VariableDeclaration(path) {

        const { kind, declarations } = path.node;
        const varDeclaration = declarations[0];
        const name = varDeclaration.id.name;

        if (kind === "const") {
          path.traverse(wrapVisitor, { name });
        }

      }
    }
  }
}
