export function getClones({
  headClonesCount,
  tailClonesCount,
  particlesContainerChildren,
}) {
  // TODO: add fns to remove clones if needed
  const clonesToAppend = []
  for (let i=0; i<tailClonesCount; i++) {
    clonesToAppend.push(particlesContainerChildren[i].cloneNode(true))
  }

  const clonesToPrepend = []
  const len = particlesContainerChildren.length
  for (let i=len-1; i>len-1-headClonesCount; i--) {
    clonesToPrepend.push(particlesContainerChildren[i].cloneNode(true))
  }

  return {
    clonesToAppend,
    clonesToPrepend,
  }
}

export function applyClones({
  particlesContainer,
  clonesToAppend,
  clonesToPrepend,
}) {
  for (let i=0; i<clonesToAppend.length; i++) {
    particlesContainer.append(clonesToAppend[i])
  }
  for (let i=0; i<clonesToPrepend.length; i++) {
    particlesContainer.prepend(clonesToPrepend[i])
  }
}

export function getClonesCount({
  infinite,
  particlesToShow,
  partialPageSize,
}) {
  const clonesCount = infinite
    ? {
      head: partialPageSize || particlesToShow,
      tail: particlesToShow,
    } : {
      head: 0,
      tail: 0,
    }

  return {
    ...clonesCount,
    total: clonesCount.head + clonesCount.tail,
  }
}
