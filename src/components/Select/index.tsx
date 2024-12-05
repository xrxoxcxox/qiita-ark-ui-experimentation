import { Portal } from '@ark-ui/react/portal'
import { Select as ArkSelect, createListCollection } from '@ark-ui/react/select'
import { ChevronDownIcon } from 'lucide-react'

export const Select = () => {
  const collection = createListCollection({ items: ['React', 'Solid', 'Vue'] })

  return (
    <ArkSelect.Root collection={collection}>
      <ArkSelect.Label>Framework</ArkSelect.Label>
      <ArkSelect.Control>
        <ArkSelect.Trigger>
          <ArkSelect.ValueText placeholder="Select a Framework" />
          <ArkSelect.Indicator>
            <ChevronDownIcon />
          </ArkSelect.Indicator>
        </ArkSelect.Trigger>
        <ArkSelect.ClearTrigger>Clear</ArkSelect.ClearTrigger>
      </ArkSelect.Control>
      <Portal>
        <ArkSelect.Positioner>
          <ArkSelect.Content>
            <ArkSelect.ItemGroup>
              <ArkSelect.ItemGroupLabel>Frameworks</ArkSelect.ItemGroupLabel>
              {collection.items.map((item) => (
                <ArkSelect.Item key={item} item={item}>
                  <ArkSelect.ItemText>{item}</ArkSelect.ItemText>
                  <ArkSelect.ItemIndicator>✓</ArkSelect.ItemIndicator>
                </ArkSelect.Item>
              ))}
            </ArkSelect.ItemGroup>
          </ArkSelect.Content>
        </ArkSelect.Positioner>
      </Portal>
      <ArkSelect.HiddenSelect />
    </ArkSelect.Root>
  )
}
